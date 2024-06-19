const express=require('express');
const app=express();
const PORT=4000;

app.use( express.json() )
app.listen(
    PORT,
    ()=>console.log(`its live at: ${PORT}`)
)

app.get('/chess',(req,res)=>{
    res.status(200).send({
        move: 'e4-e5',
        steps: '20'
    })
});

app.post('/chess/:id',(req,res)=>{
    const { id }=req.params;
    const { dat }=req.body;
    if(!dat)
        {res.status(418).send({message:`Data is needed for request`})}
    res.send({message:`message ${dat} sent succesfully!`});
});