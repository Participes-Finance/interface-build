import{F as t,u as e}from"./index.4e540c11.js";import{d as n,C as a,o as s,e as i,f as u,F as o}from"./vendor.e1c4da11.js";const l=[{constant:!1,inputs:[],name:"requestTokens",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"_address",type:"address"}],name:"allowedToWithdraw",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenInstance",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"waitTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],{userAddress:r,signer:p,network:y}=e();var d=n({name:"Faucet",setup(){var e,n,s;const i=null==(n=null==(e=null==y?void 0:y.value)?void 0:e.chainId)?void 0:n.toString(),u=new a(null==(s=t)?void 0:s.get(i),JSON.stringify(l),p.value);return{requestAmount:0,requestTokens:async function(){await async function(){return await u.allowedToWithdraw(r.value)}()||window.alert("You have to wait a day after requesting tokens to request more!!!"),await u.requestTokens()}}}});const c=u("div",{class:"title is-4 text-black",style:{"margin-bottom":"5px"}}," LP Token Faucet ",-1),b={class:"center-div"};d.render=function(t,e,n,a,l,r){return s(),i(o,null,[c,u("div",b,[u("div",null,[u("button",{class:"button bg-white text-black",onClick:e[1]||(e[1]=(...e)=>t.requestTokens&&t.requestTokens(...e))},"Request 10 Tokens")])])],64)};export default d;
