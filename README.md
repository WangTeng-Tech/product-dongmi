# 董秘参谋部 (UniverDM) 官方网站

董秘参谋部（UniverDM）官方门户网站，聚焦企业治理层智能决策中枢，呈现以三轨客观事实交叉验证为核心的董事尽职调查与经营偏差穿透引擎。

---

## 1. 核心架构与决策三轨

UniverDM 摒弃传统基于单一汇报文档的分析逻辑，独创**三轨客观事实交叉验证体系**：

- **管理事实轨（听其言）**：全自动结构化挖掘经营团队述职报告、高管会议纪要与战略绩效承诺。
- **系统底座轨（观其行）**：基于双签留痕授权通道，直接穿透只读接入 ERP（用友、金蝶）、CRM 销售管道及底层生产数据，杜绝人工汇报层层美化。
- **决策精算轨（衡其效）**：调动行业精算逻辑与规则引擎构建基线，全天候挖掘隐匿经营偏差、利润漏损与异常采购风险，输出董事尽责存证。

---

## 2. 核心技术特性

- **差异引擎**：管理层陈述与客观系统数据实时交叉碰撞，精准计算指标偏差度。
- **穿透审计**：业务单据、资金流转与物理库存链条逐笔穿透溯源。
- **事实留痕**：基于加密存证链记录质询过程与高管回复，保障董事履职尽责证据链完整。
- **智能决策看板**：直击经营痛点的决策建议与量化质询清单自动生成。

---

## 3. 技术栈

- **前端架构**：[Astro 5.x](https://astro.build/)（静态 SSG 模式，极致轻量与高安全性）
- **样式体系**：[Tailwind CSS](https://tailwindcss.com/)
- **图标组件**：[Lucide Astro](https://lucide.dev/)
- **托管平台**：Vercel（生产环境自动化构建与边缘分发）
- **容灾网络**：Cloudflare Edge Gateway（多源回源路由保障）

---

## 4. 目录结构

```text
official-site/
├── public/                 # 静态资源（背景材质、纹理、图标）
├── src/
│   ├── layouts/            # 页面骨架与全局布局 (Layout.astro)
│   ├── pages/              # 路由入口 (index.astro)
│   └── styles/             # 全局样式与自定义配色 (global.css)
├── astro.config.mjs        # Astro 配置文件
├── tailwind.config.mjs     # Tailwind 配置
├── vercel.json             # Vercel 部署规则与安全响应头
└── worker-enhanced.js      # 多云边缘容灾网关脚本
```

---

## 5. 本地开发与构建

项目统一使用 `pnpm` 包管理工具：

```bash
# 安装依赖
pnpm install

# 启动本地开发服务 (默认访问 http://localhost:4321)
pnpm dev

# 构建生产版本 (输出产物位于 dist/)
pnpm build

# 本地预览构建产物
pnpm preview
```

---

## 6. 持续集成与发布

- **官方 GitHub 仓库**：`WangTeng-Tech/product-dongmi`
- **默认生产分支**：`main`
- **自动化部署**：向 `main` 分支推送提交将自动触发 Vercel 生产构建与全球 CDN 刷新。

---

## 7. 维护组织

- **运营主体**：网腾科技 (WangTeng-Tech)
- **版权声明**：Copyright © 2026 WangTeng Tech. All rights reserved.
