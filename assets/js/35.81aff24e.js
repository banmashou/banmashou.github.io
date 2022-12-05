(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{510:function(t,e,n){"use strict";n.r(e);var s=n(13),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"别名导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#别名导入"}},[t._v("#")]),t._v(" 别名导入")]),t._v(" "),e("p",[t._v("为目录指定别名可以方便的import文件，修改vite.config.ts文件。")]),t._v(" "),e("p",[t._v("首先安装类型声明文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yarn add -D @types/node\n")])])]),e("p",[t._v("接下来将别名 @ 指向到 src 目录")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\nimport path from 'path'\n\nexport default defineConfig({\n    plugins: [vue()],\n    resolve: {\n        alias: { '@': path.resolve(__dirname, 'src') },\n    },\n})\n")])])]),e("h2",{attrs:{id:"编译目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译目录"}},[t._v("#")]),t._v(" 编译目录")]),t._v(" "),e("p",[t._v("有时 Vue 需要和后台程序如 Laravel 等结合使用，这就需要定义生产环境下的编译目录。")]),t._v(" "),e("ul",[e("li",[t._v("下面是在生产环境时为 url 定义前缀"),e("code",[t._v("/dist/")])]),t._v(" "),e("li",[t._v("并将项目编译到 "),e("code",[t._v("public/dist")]),t._v(" 目录")]),t._v(" "),e("li",[t._v("如果编译在 vue 的根目录(root)会自动清空，但下例中编译目录不在 vue 的root根目录，所以设置emptyOutput表示编译时自动清空 dist 目录")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import { defineConfig } from "vite";\nimport vue from "@vitejs/plugin-vue";\n\n//是否为生产环境\nconst IS_PRODUCTION = process.env.NODE_ENV === "production";\n\nexport default defineConfig({\n    plugins: [vue()],\n    // 生产环境与开发环境指定不同的 URL 静态文件前缀\n    base: IS_PRODUCTION ? "/dist/" : "/",\n    build: {\n        //编译目录\n        outDir: "../public/dist",\n        //编译时是否自动清空目录\n        emptyOutDir: true,\n    },\n    resolve: {\n        alias: { \'@\': path.resolve(__dirname, \'src\') },\n    },\n});\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);