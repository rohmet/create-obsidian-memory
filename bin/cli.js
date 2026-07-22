#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');

console.log('\n' + chalk.bold.cyan('🧠 Create Obsidian Memory — Base Memory Generator for AI Agents') + '\n');

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'templateType',
      message: 'Pilih template base memory yang ingin kamu buat:',
      choices: [
        {
          name: '🌐 Web Project Memory (untuk vibe coding / software project)',
          value: 'web'
        },
        {
          name: '🔬 Research Memory (untuk skripsi / tesis / paper ilmiah)',
          value: 'research'
        },
        {
          name: '📝 Theory Assignment Memory (untuk tugas esai / kajian literatur)',
          value: 'theory'
        },
        {
          name: '💼 Career Memory (untuk CV, portofolio, & lamaran kerja)',
          value: 'career'
        }
      ]
    },
    {
      type: 'input',
      name: 'targetDir',
      message: 'Masukkan nama folder/direktori tujuan (tekan Enter untuk direktori saat ini):',
      default: '.'
    }
  ]);

  const sourceDir = path.join(__dirname, '..', 'templates', answers.templateType);
  const targetDir = path.resolve(process.cwd(), answers.targetDir);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log('\n' + chalk.yellow('⏳ Menyalin file template ke direktori tujuan...'));

  try {
    copyFolderRecursiveSync(sourceDir, targetDir);
    console.log(chalk.bold.green('\n✅ Berhasil membuat base memory!'));
    console.log(chalk.gray('──────────────────────────────────────────────────────'));
    console.log(chalk.white('Langkah selanjutnya:'));
    console.log(chalk.cyan(' 1. Buka folder ini di editor (Cursor, VS Code, DLL).'));
    console.log(chalk.cyan(' 2. Buka subfolder ') + chalk.bold.white('.memory/') + chalk.cyan(' sebagai Vault di Obsidian.'));
    console.log(chalk.cyan(' 3. AI agent akan otomatis membaca ') + chalk.bold.white('AGENTS.md') + chalk.cyan(' di root.'));
    console.log(chalk.gray('──────────────────────────────────────────────────────\n'));
  } catch (error) {
    console.error(chalk.red('❌ Gagal menyalin template:'), error.message);
  }
}

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);

  files.forEach(file => {
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);

    if (fs.lstatSync(curSource).isDirectory()) {
      copyFolderRecursiveSync(curSource, curTarget);
    } else {
      fs.copyFileSync(curSource, curTarget);
    }
  });
}

main().catch(err => {
  console.error(chalk.red('An error occurred:'), err);
});
