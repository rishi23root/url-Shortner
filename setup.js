const fs = require("fs");
const { execSync, exec } = require("child_process");

// add a file .enc.local if not exists
// if (!fs.existsSync(".env.local")) {
// 	process.stdout.write("Creating .env.local... ");
// 	fs.writeFileSync(".env.local", "");
// 	console.log("Done 😏");
// } else {
// 	console.log(" 😏 .env.local already exists");
// }

// add a file .enc.local if not exists
if (!fs.existsSync(".env")) {
	process.stdout.write("Creating .env ... ");
	fs.writeFileSync(".env", "");
	console.log("Done 😏");
} else {
	console.log(" 😏 .env already exists");
}

// check if pnpm is installed else go with yarn or npm
exec("pnpm -v", (err, stdout, stderr) => {
	process.stdout.write("Installing node modules... ");
	if (err) {
		execSync("npm install");
		console.log("Done 😏");
	} else if (stdout) {
		execSync("pnpm install");
		console.log("Done 😏");
	}
});

// install node modules
