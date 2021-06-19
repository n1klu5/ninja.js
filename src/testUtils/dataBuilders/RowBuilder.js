export class RowBuilder {
  name1 = 'Mads L. Klausen';
  email = 'MadsLKlausen@jourrapide.com';
  edit_path = 'http://google.com';
  per_id = 1;

  withName1(name1) {
    this.name1 = name1;
    return this;
  }

  withEmail(email) {
    this.email = email;
    return this;
  }

  withEditPath(edit_path) {
    this.edit_path = edit_path;
    return this;
  }

  withPerId(per_id) {
    this.per_id = per_id;
    return this;
  }

  build() {
    return {
      name1: this.name1,
      email: this.email,
      edit_path: this.edit_path,
      per_id: this.per_id
    }
  }
}
