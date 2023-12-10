export enum HTTP {
	OK = 200,
	CREATED = 201,
	BAD = 200,
}

interface iError {
	name: string;
	message: string;
	status: HTTP;
	success: boolean;
}

export class mainError_1 extends Error {
	public readonly name: string;
	public readonly message: string;
	public readonly success: boolean;
	public readonly status: HTTP;

	constructor(args: iError) {
		super(args.message);

		this.message = args.message;
		this.name = args.name;
		this.status = args.status;

		if (this.success === undefined) {
			this.success = args.success;
		}

		Error.captureStackTrace;
	}
}
