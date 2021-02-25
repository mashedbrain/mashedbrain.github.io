function getDefaultHTML() {
	return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="style.css" type="text/css">
        <style></style>
    </head>
    <body>
        <h1>This is the example HTML</h1>
        <blockquote>I like spaghetti</blockquote>
        <center>And pizza</center>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
        <p>Paragraphs are nice too</p>
        <article>very good</article>
        <section>section</section>
        <textarea>Oh, an input</textarea>
        <div>
            <div>
                <div>DIV</div>
            </div>
        </div>
        <footer>The end</footer>
    </body>
</html>`;
}

function encode(html, message) {
	var binMsg = message
		.split('')
		.map((c) => (c.charCodeAt(0) >>> 0).toString(2))
		.filter((c) => c.length <= 8)
		.reduce((acc, c) => acc + Array(8-c.length).fill('0').join('') + c, "");

	var htmlTagRe = /<("[^"]*"|'[^']*'|[^'">])*>/g;
	var indexes = [];
	var m;

	while ((m = htmlTagRe.exec(html)) && (indexes.length < binMsg.length)) {
		if (/[a-z\/]/.test(m[0][1])) {
			var tag = m[0].match(/([a-z]+)/)
			for (var i = 0; i < tag[0].length; i++) {
				indexes.push(m.index+tag.index+i)
			}
		}
	}

	if (binMsg.length > indexes.length) {
		throw Error('Input HTML is too short to contain the input message')
	}


	for (var i = 0; i < indexes.length; i++) {
		if (binMsg[i] === "1") {
			html = setCharAt(html, indexes[i], html[indexes[i]].toUpperCase());
		}
	}

	return html;
}

function decode(html) {
	var htmlTagRe = /<("[^"]*"|'[^']*'|[^'">])*>/g;
	var m;
	var bits = "";

	while ((m = htmlTagRe.exec(html))) {
		if (/[a-zA-Z\/]/.test(m[0][1])) {
			var tag = m[0].match(/([a-zA-Z]+)/)
			tag[0].split('').forEach((c) => bits += (c === c.toUpperCase() ? "1" : "0"))
		}
	}

	var msg = bits.match(/.{1,8}/g).filter(c => c.length === 8)
	var end = msg.findIndex((c) => c === "00000000")
	msg = msg.reduce((acc, c, i) => {
		return i < end && end > -1 ? acc+String.fromCharCode(parseInt(c, 2)) : acc;
	}, "")

	return msg;
}

function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substring(0,index) + chr + str.substring(index+1);
}

