use anchor_lang::prelude::*;

declare_id!("9f1FK7gDKaokYMyRxbakELTv2LXsK26qjJjPKAHHCQnB");

#[program]
pub mod {{project-name}} {
use super::*;

pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
Ok(())
}
}

#[derive(Accounts)]
pub struct Initialize {}
