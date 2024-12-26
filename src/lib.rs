use anchor_lang::prelude::*;

declare_id!("89gqvKbgZA9JnNRsQAUZHp8rNYkQcNhSvKZZ1B3eHrhy");

#[program]
pub mod my_game_project {
    use super::*;

    pub fn play_game(ctx: Context<PlayGame>, guess: u8) -> Result<()> {
        let random_number = 7;
        if guess == random_number {
            msg!("You guessed it right!");
        } else {
            msg!("Try again!");
        }
        Ok(())
    }
}

#[derive(Accounts)]
pub struct PlayGame<'info> {
    #[account(mut)]
    pub player: Signer<'info>,
}