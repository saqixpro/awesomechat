const {execSync} = require('child_process')

try {
    console.log("Patching now...");
    execSync("git apply --ignore-whitespace patches/@react-native-community+art+1.2.0.patch");
    console.log("Patching Done!");
} catch(e) {
    console.log("Already Patched");
}