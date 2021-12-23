export const drawRect = (detections, ctx) =>{
    detections.forEach(prediction => {
        //getting prediction results
        const[x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];
        //styling rect box
        const color = '#' + Math.floor(Math.random()*1677721).toString(16);
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color
        
        // drawing Rectangles And text
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()
    });
}