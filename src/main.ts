import * as PIXI from "pixi.js";
import {Assets} from "@pixi/assets";

const grid = (size:number,bounds:number,col:number)=>{
	const g = new PIXI.Graphics();
	g.lineStyle(1,col);
	const lines = Math.floor(bounds/size);
	for (let i = 0; i < lines; i++)
	{
		const pos = i*size;
		g.moveTo(0,pos);
		g.lineTo(bounds,pos);
		g.moveTo(pos,0);
		g.lineTo(pos,bounds);
	}
	return g;
};

const SIZE = 480;

const app = new PIXI.Application({width:SIZE,height:SIZE,backgroundColor:0xeaeaea});
document.getElementById("canvas-container")!.appendChild(app.view);

PIXI.Text.nextLineHeightBehavior = new URLSearchParams(document.location.search).has("nlhb");

document.getElementById("info")!.innerText = `${PIXI.VERSION} - PIXI.Text.nextLineHeightBehavior: ${PIXI.Text.nextLineHeightBehavior}`;

app.stage.addChild(grid(10,SIZE,0xdadada),grid(20,SIZE,0xbbbbbb),grid(120,SIZE,0x888888));

const fonts = await Promise.all([Assets.load("/damaged.woff2"),Assets.load("/Roboto-Medium-webfont.woff")]);

const a = app.stage.addChild(new PIXI.Text("TEST",{fontFamily:fonts[0].family,fontSize:120,fill:0xffffff,stroke:0xff0000,strokeThickness:20}));
a.anchor.set(0.5);
a.position.set(120,120);

const b = app.stage.addChild(new PIXI.Text("TEST",{fontFamily:fonts[0].family,fontSize:120,fill:0xffffff,stroke:0x00aa00,strokeThickness:10}));
b.anchor.set(0.5);
b.position.set(120,240);

const c = app.stage.addChild(new PIXI.Text("TEST",{fontFamily:fonts[0].family,fontSize:120,fill:0x0000aa}));
c.anchor.set(0.5);
c.position.set(120,360);

const a2 = app.stage.addChild(new PIXI.Text("TEST",{fontFamily:fonts[1].family,fontSize:80,fill:0xffffff,stroke:0xff0000,strokeThickness:20}));
a2.anchor.set(0.5);
a2.position.set(360,120);

const b2 = app.stage.addChild(new PIXI.Text("TEST",{fontFamily:fonts[1].family,fontSize:80,fill:0xffffff,stroke:0x00aa00,strokeThickness:10}));
b2.anchor.set(0.5);
b2.position.set(360,240);

const c2 = app.stage.addChild(new PIXI.Text("TEST",{fontFamily:fonts[1].family,fontSize:80,fill:0x0000aa}));
c2.anchor.set(0.5);
c2.position.set(360,360);