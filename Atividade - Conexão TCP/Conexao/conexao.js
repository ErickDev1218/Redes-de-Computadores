// const net = require('net')
// const readline = require('readline');

// const openRl = () => {
//     return readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });
// }
// const input = async (rl) => {
//     return await new Promise((res,rej) => {
//         rl.question(`Digite "continue" para continuar o programa ou "exit" para encerrar: `, (input) => {
//         if(input.toLowerCase() === `exit`){
//           rl.close()
//           return rej(new Error('close'))
//         }else{
//           rl.question(`Digite o IP: `,(host) =>{
//             res(host)
//           })
//         }
//     }) 
// });
// }
// const conexao = async () => {
//   const rl =  openRl()
//   try{
//     const IP = await input(rl)
//     rl.close()
//     const port = 7658
//     const client = new net.Socket()
//     client.connect(port,IP, () =>{
//     })
//     await new Promise((res) => {
//       client.on('data', (request) => {
//         console.log(`${request}`)    
//       })
//       client.on('close',() => {
//         res()
//       })
//     })
//   }catch(e){
//     rl.close()
//     throw e
//   }
// }
// const main = async () => {
//   while(true){
//     try{
//       await conexao()
//     }catch(e){
//       if(e.message === 'close'){
//         break
//       }else{
//         console.log(e)
//       }
//     }
//   }
// }
// main()

// Código totalmente implementado por: Antonio Erick Freitas Ferreira - 542631 - CC.
// *** Referências ***
// https://www.tutorialspoint.com/nodejs/nodejs_net_module.htm
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises



const net = require('net')
const readline = require('readline');

const openRl = () => {
    return readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
}
const input = async (rl) => {
    return await new Promise((res,rej) => {
        rl.question(`Digite "continue" para continuar o programa ou "exit" para encerrar: `, (input) => {
        if(input.toLowerCase() === `exit`){
          rl.close()
          return rej(new Error('close'))
        }else{
          rl.question(`Digite o IP: `,(host) =>{
            res(host)
          })
        }
    }) 
});
}
const conexao = async () => {
  const rl =  openRl()
  try{
    const IP = await input(rl)
    rl.close()
    const port = 7658
    const client = new net.Socket()
    client.connect(port,IP, () =>{
    })
    await new Promise((res) => {
      client.on('data', (request) => {
        console.log(`${request}`)    
      })
      client.on('close',() => {
        res()
      })
    })
  }catch(e){
    rl.close()
    throw e
  }
}
const main = async () => {
  while(true){
    try{
      await conexao()
    }catch(e){
      if(e.message === 'close'){
        break
      }else{
        console.log(e)
      }
    }
  }
}
main()

// Código totalmente implementado por: Antonio Erick Freitas Ferreira - 542631 - CC.
// *** Referências ***
// https://www.tutorialspoint.com/nodejs/nodejs_net_module.htm
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises