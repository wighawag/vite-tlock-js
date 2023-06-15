import {testnetClient, timelockEncrypt, roundTime, Buffer} from "tlock-js";

const client = testnetClient();


export type TimedEncryption = {
	encrypted: string;
	revealRound: number;
	aproximateRevealTime: number;
};

export async function encryptMessageForXRounds(
	message: string,
	rounds: number
): Promise<TimedEncryption> {
	const latest = await client.latest();
	const revealRound = latest.round + rounds;
	const chainInfo = await client.chain().info();

	const aproximateRevealTime = Math.floor(roundTime(chainInfo, revealRound) / 1000);

	return timelockEncrypt(revealRound, Buffer.from(message, 'utf8'), client).then((value) => {
		return {
			aproximateRevealTime,
			encrypted: value,
			revealRound
		};
	});
}