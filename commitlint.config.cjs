// @see: https://cz-git.qbenben.com/zh/guide
const fs = require("fs");
const path = require("path");

const scopes = fs
  .readdirSync(path.resolve(__dirname, "src"), { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name.replace(/s$/, ""));

/** @type {import('cz-git').UserConfig} */
module.exports = {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above?"
      // 中文版
      // type: "选择你要提交的类型 :",
      // scope: "选择一个提交范围（可选）:",
      // customScope: "请输入自定义的提交范围 :",
      // subject: "填写简短精炼的变更描述 :\n",
      // body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      // breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      // footerPrefixsSelect: "选择关联issue前缀（可选）:",
      // customFooterPrefixs: "输入自定义issue前缀 :",
      // footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      // confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      {
        value: "feature",
        name: "feature: ✨ A brand new feature",
        emoji: "✨"
      },
      {
        value: "bugfix",
        name: "bugfix: 🐛 Squashed a bug",
        emoji: "🐛"
      },
      {
        value: "doc",
        name: "doc: 📖 Updated documentation",
        emoji: "📖"
      },
      {
        value: "cosmetic",
        name: "cosmetic: 💄 Code cleanup or formatting changes",
        emoji: "💄"
      },
      {
        value: "refactor",
        name: "refactor: 🔧 Improving the internal structure of code",
        emoji: "🔧"
      },
      {
        value: "performance",
        name: "performance: ⚡ Boosted performance",
        emoji: "⚡"
      },
      {
        value: "test",
        name: "test: 💡 Added or improved tests",
        emoji: "💡"
      },
      {
        value: "packaging",
        name: "packaging: 📦 Updated packaging or dependencies",
        emoji: "📦"
      },
      {
        value: "ci",
        name: "ci: 🚀 Changes to CI/CD pipeline",
        emoji: "🚀"
      },
      {
        value: "maintenance",
        name: "maintenance: 🔧 Routine maintenance",
        emoji: "🔧"
      },
      {
        value: "rollback",
        name: "rollback: ⏪ Reverting a previous change",
        emoji: "⏪"
      },
      {
        value: "wip",
        name: "wip: 🚧 Work in progress",
        emoji: "🚧"
      },
      {
        value: "workflow",
        name: "workflow: 🔄 Process improvements",
        emoji: "🔄"
      },
      {
        value: "typing",
        name: "typing: 🏷️ Type definition updates",
        emoji: "🏷️"
      },
      // 中文版
      {
        value: "feature",
        name: "特性: ✨ 新增功能",
        emoji: "✨"
      },
      {
        value: "bugfix",
        name: "修复: 🐛 修正缺陷",
        emoji: "🐛"
      },
      {
        value: "doc",
        name: "文档: 📖 更新文档",
        emoji: "📖"
      },
      {
        value: "cosmetic",
        name: "美化: 💄 代码清洁或格式化改动",
        emoji: "💄"
      },
      {
        value: "refactor",
        name: "重构: 🔧 改进代码内部结构",
        emoji: "🔧"
      },
      {
        value: "performance",
        name: "性能: ⚡ 提升性能",
        emoji: "⚡"
      },
      {
        value: "test",
        name: "测试: 💡 添加或改进测试",
        emoji: "💡"
      },
      {
        value: "packaging",
        name: "打包: 📦 更新打包或依赖项",
        emoji: "📦"
      },
      {
        value: "ci",
        name: "CI/CD: 🚀 修改CI/CD流水线",
        emoji: "🚀"
      },
      {
        value: "maintenance",
        name: "维护: 🔧 日常维护",
        emoji: "🔧"
      },
      {
        value: "rollback",
        name: "回滚: ⏪ 回退之前的更改",
        emoji: "⏪"
      },
      {
        value: "wip",
        name: "WIP: 🚧 进行中",
        emoji: "🚧"
      },
      {
        value: "workflow",
        name: "工作流: 🔄 流程改进",
        emoji: "🔄"
      },
      {
        value: "typing",
        name: "类型定义: 🏷️ 类型定义文件更新",
        emoji: "🏷️"
      }
    ],
    useEmoji: true,
    scopes: [...scopes],
    customScopesAlign: "bottom",
    emptyScopesAlias: "empty",
    customScopesAlias: "custom",
    allowBreakingChanges: ["feat", "fix"]
  }
};
