// import { PageX } from './PageX'

class Main {
	constructor() {
		jQuery(document).ready(() => {
		});
	}

	public name = "";

	show(text: string): void {
		let $ele: JQuery = $("h1");
		$ele.text(text);
	}
}

let main = new Main();
main.name = "Hello TypeScript";
main.show(main.name);

// let main = new PageX();
// main.show('333')