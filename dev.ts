import { sleep } from "@techmmunity/utils";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";

const x = () => {
	const file = readFileSync("./template.html", "utf8");
	const settings = readFileSync("./swagger.json", "utf8");

	const fileUpdated = file.replace("{ REPLACE_HERE }", settings);

	if (!existsSync("./swagger")) {
		mkdirSync("./swagger");
	}

	writeFileSync("./swagger/index.html", fileUpdated);

	// eslint-disable-next-line no-console
	console.log("Done.");

	// eslint-disable-next-line no-magic-numbers
	sleep(60 * 60);
};

x();
