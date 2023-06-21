import { read, utils,} from 'xlsx';





async function ParsedJson(){
        const wholeData=[];
        const Data=[];

        const f = await (await fetch("https://docs.google.com/spreadsheets/d/1kXc4c9EE-ZEBb3vmoKzXksJolxUUMGicKr0kg4mK54Q/edit?usp=drive_link")).arrayBuffer();
        const wb = read(f); // parse the array buffer
        const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
        const data = utils.sheet_to_json(ws); // generate objects


        const f2 = await (await fetch("https://docs.google.com/spreadsheets/d/10Qhspj8Lk7pB5isxjmXXgXC6_A13yd6JS4NaNguEaIg/edit?usp=drive_link")).arrayBuffer();
        const wb2 = read(f2); // parse the array buffer
        const ws2 = wb2.Sheets[wb2.SheetNames[0]]; // get the first worksheet
        const data2 = utils.sheet_to_json(ws2); // generate objects

        const f3 = await (await fetch("https://docs.google.com/spreadsheets/d/1MudWENqpymL5SeNhpNJTDoILVpsCoteoX1kaqBaLLsQ/edit?usp=drive_link")).arrayBuffer();
        const wb3 = read(f3); // parse the array buffer
        const ws3 = wb3.Sheets[wb3.SheetNames[0]]; // get the first worksheet
        const data3 = utils.sheet_to_json(ws3); // generate objects

        const f4 = await (await fetch("https://docs.google.com/spreadsheets/d/1K7N5lISZPx040bGl8lMO03FGwvYrxCQPk9PZBRZH2U4/edit?usp=drive_link")).arrayBuffer();
        const wb4 = read(f4); // parse the array buffer
        const ws4 = wb4.Sheets[wb4.SheetNames[0]]; // get the first worksheet
        const data4 = utils.sheet_to_json(ws4); // generate objects

           
        const dataset=[data,data2,data3,data4]
        dataset.forEach((data)=>{
        data.forEach((soc)=>{
                    if(soc.A && soc.A!=="Sr. No."){
                        wholeData.push(soc);
                    }
                })
            })        
        return (wholeData) // update state
}



export default ParsedJson;