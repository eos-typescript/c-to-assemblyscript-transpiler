const fs = require("fs");

let fileLoc = process.argv[2];//the first argument after 'node index.js'

fs.readFileSync(fileLoc).toString().split('\n').forEach(function (line) { 
	    	if(line.indexOf("(") >= 0)
			console.log(handleLine(line));
});

function handleLine(line){
	line = changeType(line,"const ", "");

	let returnType = line.split(" ")[0];
	let name = line.split("(")[0].split(" ")[1];
	let args = line.split("(")[1].split(")")[0].split(",");
	line = "declare function " + name + "(";
	for(i = 0; i < args.length; i++){
		let a = args[i].trim().split(" ");
		line += a[1] + ": " + changeTypes(a[0]) + ", ";
	}
	if(args.length > 0)
		line = line.substring(0, line.length - 2);
	
	line += "): " + changeTypes(returnType);
	line += ";";
	return line;	
}

function changeTypes(line){
	line = changeType(line, "uint64_t\\*", "usize");//pointer
	line = changeType(line, "uint32_t\\*", "usize");
	line = changeType(line, "uint32_t", "u32");
	line = changeType(line, "uint64_t", "u64");
	line = changeType(line, "int32_t", "i32");
	line = changeType(line, "void\\*", "usize");
	line = changeType(line, "const", "");
	
	return line;
}

function changeType(line, original, target){
	return line.replace(new RegExp(original, 'g'), target);
}
