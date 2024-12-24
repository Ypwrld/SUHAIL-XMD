const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_04_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI2LFxuICAgICAgICA2OSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ1hNR25yNmVDTk9YR1pSMlBVMCtUSzJPMWlIK0ltaGhKMU12MHNxb21Xaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDIxNjgyNTc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQ0Q5QUI0MTNCRDI5MTk1M0Q0RjFDRjE5MTQ0ODYwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUwMzgyNThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidkdQVU5tTi1TU3lVSDVzNk9DRzBMZ1wiLFxuICBcInBob25lSWRcIjogXCI0MTBmMzY4My00ZjY4LTRkMmQtYmY0MC1mMDQwNjIwNzI5NzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICA4MCxcbiAgICAgIDIzLFxuICAgICAgNDgsXG4gICAgICAyMzUsXG4gICAgICA0MCxcbiAgICAgIDUxLFxuICAgICAgMTQ3LFxuICAgICAgMTQyLFxuICAgICAgODAsXG4gICAgICAxNzIsXG4gICAgICA3MCxcbiAgICAgIDI1NSxcbiAgICAgIDE0MixcbiAgICAgIDg3LFxuICAgICAgODUsXG4gICAgICAxNjAsXG4gICAgICAxNTEsXG4gICAgICAxMjgsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTY4LFxuICAgICAgODEsXG4gICAgICAyMzEsXG4gICAgICAxMTUsXG4gICAgICAyNDksXG4gICAgICA3MyxcbiAgICAgIDI1LFxuICAgICAgMTYzLFxuICAgICAgMTEsXG4gICAgICAyNDksXG4gICAgICA0OCxcbiAgICAgIDEzMyxcbiAgICAgIDI0MSxcbiAgICAgIDkwLFxuICAgICAgMTgwLFxuICAgICAgNzcsXG4gICAgICAxOTMsXG4gICAgICAxNjMsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWU5LMjNFV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyMTY4MjU3NDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDI1MTYxNDE3MDczMTI6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObnh5L3dIRUsycXFyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQyU2VoZTVpdStIaGZSc1pteSt5dVdvVWJtTlYwS0xOZDVzYk4rMUpYMFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2lkVnFNT254UHZIcGdtaUVXajRQbk5ZUXlQQWtTa2EweHRpWFBYaGVsUU1mOTdqNDFLeXR5ZlJBWUhnWml0TWNoOTUyK1JxQTZZWDQwcHNrbFRqRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZVVYcFZZUnJJb25sb3hrd2EwRExtMU42MHVVT1dIajM1aC9RVGlnOGFrT0N6Vm5rWWU3Tm1KcldCdWJvb3lKRFVxSnpHbFhXSHB5ZGtmVkdzMzZTQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyMTY4MjU3NDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MDM4MjU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTm5nXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFObmcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1NnNFR1NvSGJBeUpjNkEyVDhQSkFvY0gyUzhjZzdQT0djZ2hHQ0JqUERnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxNDAzMzgzOTIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUwMzc2MDk2MjJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
