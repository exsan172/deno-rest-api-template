<h1>Deno Rest Api Template</h1>
<p>
    This template using for create api service, using oak, mongodb, creating base on express js, and native suport typescript
</p>
<br/>

<h2>🆙 Recomendation : </h2>
<p>
- Using vs code extensions for deno 
<a href="https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno"> You will found here </a>
</p>
<p>
- Manage your dependencies in file dependencies.ts
</p>
<br/>

<h2> 🤖 Dependencies : </h2>
<p>
    ✅ oak
</p>
<p>
    ✅ deno_mongo
</p>
<p>
    ✅ moment
</p>
<br/>

<h2>ℹ️ How to start : </h2>
<p>
    Like nodejs in deno have deno.json, you can modify it.
</p>
<br/>

<h3>Install dependencies</h3>
<code>deno task install</code>
<br/>
<br/>

<h3>Start production mode</h3>
<code>deno task start</code>
<br/>
<br/>

<h3>Start development mode</h3>
<p>note : deno will restart if you change the code</p>
<code>deno task dev</code>
<br/>
<br/>

<h2>🔀 Structure Folder : </h2>
<br/>

```.
└── deno-rest-api-template/
    ├── configs/
    │   ├── mongodbConnection
    │   ├── resposeStructure
    │   └── index.ts
    ├── controllers/
    │   ├── home
    │   └── index.ts
    ├── middlewares/
    │   ├── 404Handle
    │   ├── loger
    │   ├── timeCounter
    │   └── index.ts
    ├── models/
    │   ├── home
    │   └── index.ts
    ├── services/
    │   ├── home
    │   └── index.ts
    ├── routes/
    │   ├── home
    │   └── index.ts
    ├── main.ts
    ├── .env
    ├── .gitignore
    ├── deno.json
    └── readme.md
```
<br/>

<h2>🤡 Author : </h2>
<a href="https://github.com/exsan172">Exsan Renaldhi</a>
<br/>