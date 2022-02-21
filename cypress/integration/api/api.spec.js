let id;
describe('API test', () => {
  it('GET method test | Emptu todos', () => {
    cy.request('GET', 'https://cryptic-ravine-29648.herokuapp.com/todos').then(
      (res) => {
        expect(res).to.have.property('status', 200);
        expect(res.body).to.not.null;
        expect(res.body).to.have.length(0);
      },
    );
  });

  it('POST method test', () => {
    cy.request('POST', 'https://cryptic-ravine-29648.herokuapp.com/todos', {
      title: 'Todo this',
      data: '20.20.2020',
      status: false,
      mark: false,
    }).then((res) => {
      expect(res).to.have.property('status', 200);
      expect(res.body).to.not.null;
    });
  });

  it('GET method test | All todos', () => {
    cy.request('GET', 'https://cryptic-ravine-29648.herokuapp.com/todos').then(
      (res) => {
        id = res.body[0]._id;

        expect(res).to.have.property('status', 200);
        expect(res.body).to.not.null;
        expect(res.body).to.have.length(1);
      },
    );
  });

  it('Put method test', () => {
    cy.request('PUT', 'https://cryptic-ravine-29648.herokuapp.com/todos', {
      title: 'Title was changed',
      data: '21.21.2121',
      status: true,
      mark: true,
      _id: id,
    }).then((res) => {
      expect(res).to.have.property('status', 200);
      expect(res.body).to.not.null;
    });
  });

  it('GET method test | By id', () => {
    cy.request(
      'GET',
      `https://cryptic-ravine-29648.herokuapp.com/todos/${id}`,
    ).then((res) => {
      expect(res).to.have.property('status', 200);
      expect(res.body).to.not.null;
      expect(res.body).to.have.property('title', 'Title was changed');
    });
  });

  it('Delete method test | By id', () => {
    cy.request(
      'Delete',
      `https://cryptic-ravine-29648.herokuapp.com/todos/${id}`,
    ).then((res) => {
      expect(res).to.have.property('status', 200);
      expect(res.body).to.not.null;
      expect(res.body).to.have.property('_id', id);
    });
  });
});
