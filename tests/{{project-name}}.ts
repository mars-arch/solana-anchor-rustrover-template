import * as anchor from "@coral-xyz/anchor";
import {Program} from "@coral-xyz/anchor";
import {MyProject} from "../target/types/my_project";

describe("my_project", () => {
    anchor.setProvider(anchor.AnchorProvider.env());
    const program = anchor.workspace.MyProject as Program<MyProject>;

    it("Is initialized!", async () => {
        const tx = await program.methods.initialize().rpc();
        console.log("Your transaction signature", tx);
    });
});
