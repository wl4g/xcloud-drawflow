if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f163abaa"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"e7e1935fd594220db5f349ac22f97c9d"},{url:"js/extensions.min.js",revision:"bd4cf4a4671aba5d4a64205ecd44250a"},{url:"js/stencils.min.js",revision:"4e7448cd52e7be7804236973ff1c37b0"},{url:"js/shapes-14-6-5.min.js",revision:"2a45abd06dfe78e69135e9f87f9b78d3"},{url:"js/math-print.js",revision:"9d98c920695f6c3395da4b68f723e60a"},{url:"index.html",revision:"6d4fee0a8111a8faf43063d25ceea2dc"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/grapheditor.css",revision:"b83ab40a56fdf706d7e633e7c30db289"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"87d5d01385c5d0f0c4c4f5d0f3532826"},{url:"js/croppie/croppie.min.css",revision:"fc297c9002c79c15a132f13ee3ec427e"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"d82b9c14d7a069efabef719a8a5f3975"},{url:"js/viewer-static.min.js",revision:"e8a166988d431323cc0adc6950a5a2a5"},{url:"connect/jira/editor-1-3-3.html",revision:"fb7e91ab8890425d55f0122a01cc5b20"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"9020fb8d69a51d0162b8dfd938315259"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"c58a7c55a335f49d84bc4b1aac9885aa"},{url:"connect/jira/viewerPanel.js",revision:"32763e62c3a7498a8ee479fee8a55bb7"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"435d01373a459c134b05b6640c88c327"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"197ed5837ed27992688fc424699a9a78"},{url:"connect/jira/fullscreen-viewer.js",revision:"bd97b40b9dc692b1b696b188263799ff"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"159835ebab73810cc3f4fea9d904fab6"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"e88b96bfc81ee9278c804f67b5f96b04"},{url:"connect/new_common/cac.js",revision:"b1eb16ac1824f26824c748e8b8028e30"},{url:"connect/gdrive_common/gac.js",revision:"06a30c8936357c186240e9a18a1cd34c"},{url:"connect/onedrive_common/ac.js",revision:"994c3113d437180945c51e63e6a9b106"},{url:"connect/confluence/viewer-init.js",revision:"4a60c6c805cab7bc782f1e52f7818d9f"},{url:"connect/confluence/viewer.js",revision:"8527f67e207375c0654e19df4cb977cc"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c154ee66bab65cd0e476c1d64c64cb8d"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"689fa63fd3a384662b4199f6e4a5b5c1"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"259248f0077c6506703d5b4ecaff36dc"},{url:"connect/confluence/includeDiagram.html",revision:"9f0658477ece6384b7fb75eb769e54bc"},{url:"connect/confluence/macro-editor.js",revision:"9b1c5395a3c3ee9b7d41873f37fc7875"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"de246c361e16f1912e18183e3a4920f2"},{url:"resources/dia_am.txt",revision:"319cda81e8094a9c7c5c71a575412878"},{url:"resources/dia_ar.txt",revision:"1e0e03a12d8271f3c76fc9706a3b05f2"},{url:"resources/dia_bg.txt",revision:"3fcebf558a853aa5525df756d14c911e"},{url:"resources/dia_bn.txt",revision:"112e4e442c4c5e106f56f20916df0991"},{url:"resources/dia_bs.txt",revision:"9aadd9262e43328c24c39e10fb9e07b8"},{url:"resources/dia_ca.txt",revision:"8e27654b5bccb25fd64bd5ca25dd457d"},{url:"resources/dia_cs.txt",revision:"ff23418a1fc72c3dc823c8a36ef045cb"},{url:"resources/dia_da.txt",revision:"2d595423e7cae28aa40c5fb446f6c607"},{url:"resources/dia_de.txt",revision:"67811638a22c88cadbeb70888ee70c97"},{url:"resources/dia_el.txt",revision:"b7874896dc88731e1a4539e2692e25eb"},{url:"resources/dia_eo.txt",revision:"ad3e60c28997ac53d81668657c270658"},{url:"resources/dia_es.txt",revision:"3e3936e8a46103a970caa6700b2cfee9"},{url:"resources/dia_et.txt",revision:"b5deb9abd85d94ac3e46277417f35759"},{url:"resources/dia_eu.txt",revision:"ccc06c8170ee20db44723b4614be4007"},{url:"resources/dia_fa.txt",revision:"3b20a335c50dbe4a47ea8af0128d0073"},{url:"resources/dia_fi.txt",revision:"806b7c2722ba3cacd4cd3c2df50628a6"},{url:"resources/dia_fil.txt",revision:"afa78012fb16c8047e6bb3b125e7e3f8"},{url:"resources/dia_fr.txt",revision:"2fcf905f2477fe678174f59fc4566386"},{url:"resources/dia_gl.txt",revision:"40c344f29c0c7549293726ea2a32e43e"},{url:"resources/dia_gu.txt",revision:"3455765ac051d47f0d6cef77e6275021"},{url:"resources/dia_he.txt",revision:"c4ca85c6f25ef6988c368c604c577571"},{url:"resources/dia_hi.txt",revision:"40daf9d70cafafcccad4bdb2c87f45ea"},{url:"resources/dia_hr.txt",revision:"3d5d2e46e04888fe98a675e7fff45b8c"},{url:"resources/dia_hu.txt",revision:"6675468a6d69212cc91ca93868040757"},{url:"resources/dia_id.txt",revision:"5f205ce5f703ac8ea5a698bd56c51f93"},{url:"resources/dia_it.txt",revision:"d68fe388d8eb7c515421b4d6aeec8e53"},{url:"resources/dia_ja.txt",revision:"ea686c92f9d42f908a4488a9d5814a1f"},{url:"resources/dia_kn.txt",revision:"78d66867fb8ffd7003f73bbd62334bb8"},{url:"resources/dia_ko.txt",revision:"6362bcb7a531ba3bde5e52d61b4336f8"},{url:"resources/dia_lt.txt",revision:"1b55f2713d7492ff703016ce0d90058b"},{url:"resources/dia_lv.txt",revision:"b79c9f33c8192f4b30926705706095ed"},{url:"resources/dia_ml.txt",revision:"ed7251d27f886385f1e5245fb58a1675"},{url:"resources/dia_mr.txt",revision:"811a4568743ea874ee2f72337c76b6cb"},{url:"resources/dia_ms.txt",revision:"1f4491f409b4863abf97682f1a141c18"},{url:"resources/dia_my.txt",revision:"de246c361e16f1912e18183e3a4920f2"},{url:"resources/dia_nl.txt",revision:"a74e5a89ad9b7aa6cdd18ed906376b11"},{url:"resources/dia_no.txt",revision:"9e4f174a779f84547eab04845b10959c"},{url:"resources/dia_pl.txt",revision:"892b36582564c1c5f0a58900ef06c0ff"},{url:"resources/dia_pt-br.txt",revision:"f259a247d5bc5ff41b12350311d2a1ba"},{url:"resources/dia_pt.txt",revision:"0d587498ac46c75f71ad3344e671efd4"},{url:"resources/dia_ro.txt",revision:"e4061120e72f2ce7cd2e42b0d804e2ef"},{url:"resources/dia_ru.txt",revision:"14dd08d0eeed63dd9d77fa4c2cdca1d9"},{url:"resources/dia_si.txt",revision:"de246c361e16f1912e18183e3a4920f2"},{url:"resources/dia_sk.txt",revision:"23fe3b51393d6215ce1d1cec197013cf"},{url:"resources/dia_sl.txt",revision:"06ef097b79b01e95d63229ca54d6121b"},{url:"resources/dia_sr.txt",revision:"a9b05944d2b1dc81b45dbf81ccbe43dc"},{url:"resources/dia_sv.txt",revision:"23cc1ef6bdd68e8ffa7a22be808dcfcb"},{url:"resources/dia_sw.txt",revision:"a10933a009fabc446dd1a73b7b3ee5d6"},{url:"resources/dia_ta.txt",revision:"161437618c5c5178ff4f37cf7a41cc43"},{url:"resources/dia_te.txt",revision:"7348773221051ac18ad4d7bc10a1b7f6"},{url:"resources/dia_th.txt",revision:"1bfd4e88904fba7ead063f2db6a75590"},{url:"resources/dia_tr.txt",revision:"6e5deb8e8e688794155ed347ce31128f"},{url:"resources/dia_uk.txt",revision:"8d6dad2deb405bc51eda95a24e25a07c"},{url:"resources/dia_vi.txt",revision:"4a1991dcd8eb6a5fbe29f340a3be529e"},{url:"resources/dia_zh-tw.txt",revision:"33a98fb737c582518c6c1a762b715f45"},{url:"resources/dia_zh.txt",revision:"df7266a624e3a967e9bcd09c94dfbba3"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"38b32aefe5d1456144ae00d2c67aab46"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map