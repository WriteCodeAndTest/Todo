install-dependencies:
	npm install

lint:
	npx eslint .

test:
	npm test --maxWorkers=2
