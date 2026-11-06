import test from 'node:test';import assert from 'node:assert/strict';import {calculate,defaults,distance,validate} from '../src/geometry.js';
test('symmetrical 45 degree roof geometry',()=>{const r=calculate({...defaults,width:8,length:12,pitch:45,overhang:0});assert.ok(Math.abs(r.rise-4)<1e-10);assert.ok(Math.abs(r.area-96*Math.SQRT2)<1e-10);assert.equal(r.count,21);});
test('spacing never exceeds requested maximum',()=>{const r=calculate({...defaults,length:12.1});assert.equal(r.count,22);assert.ok(r.actualSpacing<=.6);});
test('mono roof uses full span',()=>assert.ok(Math.abs(calculate({...defaults,type:'mono',pitch:45}).rise-8)<1e-10));
test('reject invalid imported dimensions',()=>{assert.throws(()=>validate({...defaults,width:NaN}));assert.throws(()=>validate({...defaults,pitch:90}));});
test('3D distance',()=>assert.equal(distance({x:0,y:0,z:0},{x:3,y:4,z:12}),13));
