const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.studout,
});

const fs=require("fs");
const folderName = 'd:/node js program/';
var fname="";
var path="";
var filepath="";
var filename="";
const file = 'd:/node js program/';

var createdir = () => {
    r1.question("Please enter the folder name: ", (ans) => {
        //create a directory
        fname=ans;
        path=folderName.concat(ans);
        try{
            if(!fs.existsSync(path)){
                fs.mkdirSync(path);
                console.log("Folder Created");
                open();
            }
        }catch(err){
            console.log(err);
        }
    });
}

var removedir = () => {
    //remove a directory
    if(fname === ""){
        console.log("Please create a folder first.");
    }else{
        fs.rmdir(path,function(err){
            if(err){
                console.log(err);
            }else{
                console.log("Folder Deleted");
            }
        });
    }
    open();
}

var writedata = () => {
    //Write data into the file
    console.log("Enter the file name: ");
    r1.question("Enter the file name: ",(ans)=>{
        filename=ans;
        filepath=file.concat(ans)+".txt";
        console.log("enter the data:");
        r1.question("enter the data:",(ans)=>{
            fs.writeFile(filepath,ans,function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("File Saved Successfully!");
                    open();
                }
            }); 
        });    
    });
}

var readdata = () => {
    //Read data from the file
    if(filename === ""){
        console.log("file not found");
    }else{
        fs.readFile(filepath,"utf8",(err,data) => {
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        });
    }
    open();
}

var deleteFile = () => {
    if(filename === ""){
        console.log("file not found");
    }else{
        fs.unlink(filepath,function(err){
            if(err){
                console.log(err);
            }else{
                console.log("File Deleted");
                filename="";
            }
        });
    }
    open();
}

var appenddata = () => {
    //Append data
    if(filename === ""){
        console.log("File not found");
        open();
    }else{
        console.log("Enter the data to append: ");
        r1.question("Enter the data to append: ",(ans) => {
            fs.appendFile(filepath,ans,function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("File Updated Successfully!");
                    open();
                }
            });
        });
    }
}

var replacedata = () => {
    if(filename === ""){
        console.log("File not found");
        open();
    }else{
        console.log("Enter new data: ");
        r1.question("Enter new data: ",(ans) => {
            fs.writeFile(filepath,ans,(err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log("Data added and Remove old data");
                    open();
                }
            });
        });
    }
}

var rename = () => {
    if(filename === ""){
        console.log("File not found");
        open();
    }else{
        console.log("enter the new file name: ");
        r1.question("enter the new file name: ",(data)=>{
            var newfilename= file.concat(data)+".txt";
            fs.rename(filepath,newfilename,function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("Fil Rename Sucefully");
                    filepath=newfilename;
                    open();
                }
            });
        });
    }
}

var menu = () => {
    console.log("\n0.Exit");
    console.log("1.Create Directory");
    console.log("2.Remove Directory");
    console.log("3.Write data into the File");
    console.log("4.Read data into the File");
    console.log("5.Delete File");
    console.log("6.Append data into the file");
    console.log("7.Replace a new data");
    console.log("8.Rename File");
}

var start = () => {
    r1.question("Enter your choice: ", (ans) => {
        if(ans === "0"){
            r1.close();
        }else if(ans === "1"){
            createdir();
        }else if(ans === "2"){
            removedir();
        }else if(ans === "3"){
            writedata();            
        }else if(ans === "4"){
            readdata();
        }else if(ans === "5"){
            deleteFile();            
        }else if(ans === "6"){
            appenddata();
        }else if(ans === "7"){
            replacedata            
        }else if(ans === "8"){
            rename();
        }else{
            console.log("Invalid Choice");
            open();
        }
    });
}

var open = () =>{
    menu();
    start();
}

open();
