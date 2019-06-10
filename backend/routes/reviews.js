const reviews = [
  {
    name: 'name',
    content: 'Denna smakade på detta sätt.'
  },
  {
    name: 'name1',
    content: 'Denna smakade på detta sätt. 1'
  },
  {
    name: 'name2',
    content: 'Denna smakade på detta sätt. 2'
  },
  {
    name: 'name3',
    content: 'Denna smakade på detta sätt. 3'
  }
]

const get = (req, res, next) => {
  res.send(reviews)
}

module.exports = {
  get
}