install-dependencies:
	npm install

lint:
	npx eslint .

test:
	npm test --maxWorkers=2

smoke-test:
	npm test:smoke --maxWorkers=2

e2e-test:
	npx cypress:run
