export const searchText = (text, rows) => {
  if (text) {
    return rows.filter((row) => {
      return row.name1.toLocaleLowerCase().search(text.toLocaleLowerCase()) > -1 ||
       (row.email && row.email.toLocaleLowerCase().search(text.toLocaleLowerCase()) > -1)
    })
  }

  return [];
}