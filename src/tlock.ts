import {testnetClient, timelockEncrypt, roundTime, roundAt, timelockDecrypt} from "tlock-js";
import { timestamp } from './time';

import {Buffer} from 'buffer';
(globalThis as any).Buffer = Buffer

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


export async function encryptMessageForXSeconds(
	message: string,
	numSeconds: number
): Promise<TimedEncryption> {
	const chainInfo = await client.chain().info();
	const currentTimestamp = timestamp();
	const aproximateRevealTime = currentTimestamp + numSeconds;
	const revealRound = roundAt(aproximateRevealTime * 1000, chainInfo);
	return timelockEncrypt(revealRound, Buffer.from(message, 'utf8'), client).then((value) => {
		return {
			aproximateRevealTime,
			encrypted: value,
			revealRound
		};
	});
}

export async function decryptMessage(encrypted: string, roundNumber?: number): Promise<string> {
	// TODO round number
	return await timelockDecrypt(encrypted, client);
}
