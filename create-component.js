const fs = require("fs");
const path = require("path");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`What is the name of the component you wish to create: `, (name) => {
    console.log(`Creating ${name} directory`);
    const comp = path.join(__dirname, `/src/components/${name}`);
    fs.mkdir(comp, (err) => {
        if (err) {
            throw err;
        }
    });
    console.log(`Creating ${name}.styles.scss file`);
    fs.writeFileSync(comp + `/${name}.styles.scss`, "");
    console.log(`Creating ${name}.components.jsx file`);
    fs.writeFileSync(
        comp + `/${name}.components.jsx`,
        `import './${name}.styles.scss'

const ${name[0].toUpperCase() + name.slice(1)} = () => {
    return (
        <div>
            placeholder
        </div>
    )
}

export default ${name[0].toUpperCase() + name.slice(1)}
`);
    process.exit(0);
});
