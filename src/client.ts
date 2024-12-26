import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { Program, Provider } from '@project-serum/anchor';
import idl from './idl.json'; // Adjust the path to your IDL file

const secretKey = new Uint8Array([
    177, 126, 57, 207, 178, 106, 68, 136, 212, 187, 0, 67, 57, 148, 128, 121, 
    165, 249, 91, 115, 176, 238, 126, 253, 127, 186, 129, 218, 141, 217, 249, 
    210, 209, 230, 164, 220, 23, 189, 135, 81, 49, 33, 249, 166, 42, 40, 26, 
    43, 219, 66, 25, 172, 36, 146, 41, 48, 219, 233, 217, 154, 78, 17, 90, 18
]);

const provider = new Provider(
    new Connection('https://api.testnet.solana.com'), 
    Keypair.fromSecretKey(secretKey), 
    {}
);

const programId = new PublicKey('89gqvKbgZA9JnNRsQAUZHp8rNYkQcNhSvKZZ1B3eHrhy');
const program = new Program(idl, programId, provider);

document.getElementById('play-button')?.addEventListener('click', async () => {
    const guess = 7; // Replace with your guess
    try {
        const tx = await program.rpc.playGame(guess, {
            accounts: {
                player: provider.wallet.publicKey,
            },
        });
        console.log('Transaction successful:', tx);
    } catch (error) {
        console.error('Error interacting with program:', error);
    }
});
