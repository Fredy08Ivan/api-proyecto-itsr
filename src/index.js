import app from "./app";
import './databa';

import  path from "path";
import express from "express";

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'),()=>{
    console.log('server on port'+ app.get('port'))
});
