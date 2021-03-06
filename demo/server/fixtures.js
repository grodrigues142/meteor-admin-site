if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  
  // create admin user
  Meteor.users.insert({
    "_id" : "5bvb7XXQX7NZHMxTB",
    "createdAt" : now - 24 * 3600 * 1000,
    "profile" : {
      "name" : "Administrator",
      "role" : "admin",
      "addresses":  [
        {street1:'Av Rio Branco, 18',   street2:'SL 1801',    city:'Rio de Janeiro', state:'RJ', zip:'24000-000', country:'Brazil'},
        {street1:'55 East 52nd Street', street2:'21st Floor', city:'New York',       state:'NY', zip:'10022',     country:'USA' }
      ]
    },
    "services" : {
      "password" : {
        "srp" : {
          "identity" : "hXLv4ETaXditKz9vu",
          "salt" : "c4SY7pCiCTXZLJSeh",
          "verifier" : "762ead155f6b9f1fce6a0f2736ec00966778ad0ab04187dff0b08e683fa1a4d0bfff00a01af93d80b741e" +
                       "6e95e0f5d50539e42b6ff5cf9c9b43020c155565866e44987933a70173482b9fef96ad0800b2cf45c9a5d" +
                       "96ebee3af8569ca548587012d7fe4f9560b2406d323e433eba237389e90caba761cd64ef1fea6dfd2bff9f"
        }
      }
    },
    "username" : "admin"
  });

  Meteor.users.insert({
    "_id" : "6bvb8XnQX8NZHMx0C",
    "createdAt" : now - 23 * 3600 * 1000,
    "profile" : {
      "name" : "Staff",
      "role" : "staff"
    },
    "services" : {
      "password" : {
        "srp" : {
          "identity" : "hXLv4ETaXditKz9vu",
          "salt" : "c4SY7pCiCTXZLJSeh",
          "verifier" : "762ead155f6b9f1fce6a0f2736ec00966778ad0ab04187dff0b08e683fa1a4d0bfff00a01af93d80b741e" +
                       "6e95e0f5d50539e42b6ff5cf9c9b43020c155565866e44987933a70173482b9fef96ad0800b2cf45c9a5d" +
                       "96ebee3af8569ca548587012d7fe4f9560b2406d323e433eba237389e90caba761cd64ef1fea6dfd2bff9f"
        }
      }
    },
    "username" : "staff"
  });

  Meteor.users.insert({
    "_id" : "7bfb9Xn2X9NZHMx1q",
    "createdAt" : now - 22 * 3600 * 1000,
    "profile" : {
      "name" : "User",
      "role" : "user"
    },
    "services" : {
      "password" : {
        "srp" : {
          "identity" : "hXLv4ETaXditKz9vu",
          "salt" : "c4SY7pCiCTXZLJSeh",
          "verifier" : "762ead155f6b9f1fce6a0f2736ec00966778ad0ab04187dff0b08e683fa1a4d0bfff00a01af93d80b741e" +
                       "6e95e0f5d50539e42b6ff5cf9c9b43020c155565866e44987933a70173482b9fef96ad0800b2cf45c9a5d" +
                       "96ebee3af8569ca548587012d7fe4f9560b2406d323e433eba237389e90caba761cd64ef1fea6dfd2bff9f"
        }
      }
    },
    "username" : "user"
  });
  
  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom', role: 'staff' },
    username: 'tcoleman'
  });
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha', role: 'staff' },
    username: 'sgreif'
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0
  });
  
  // Products and categories
  Categories.insert({
    name: 'Software',
    description: 'Software',
  });
  
  Categories.insert({
    name: 'Hardware',
    description: 'Hardware',
  });

  Products.insert({
    category: ['Software'],
    name: 'Linux',
    description: 'Lorem ipsum dolor sit amet, eget molestie vestibulum, elit lobortis.',
    image: '/img/linux.jpg',
    price: 0.00
  });

  Products.insert({
    category: ['Hardware'],
    name: 'Motherboard',
    description: 'Sed vitae, et aut doloremque. Vivamus egestas ut, sed eleifend, proin mi.',
    image: '/img/motherboard.jpg',
    price: 25.00
  });

  Products.insert({
    category: ['Hardware'],
    name: 'Arduino',
    description: 'Lorem ipsum dolor sit amet, eget molestie vestibulum, elit lobortis.',
    image: '/img/arduino.jpg',
    price: 17.00
  });
  
  for (var i = 0; i < 10; i++) {
    Products.insert({
      category: ['Hardware'],
      name: 'Hardware ' + i,
      description: 'Lorem ipsum dolor sit amet, eget molestie vestibulum, elit lobortis.',
      image: '/img/hardware' + i + '.jpg',
      price: i * 10
    });
  }

  for (var i = 9; i >= 0; i--) {
    Products.insert({
      category: ['Software'],
      name: 'Software ' + i,
      description: 'Lorem ipsum dolor sit amet, eget molestie vestibulum, elit lobortis.',
      image: '/img/software' + i + '.jpg',
      price: i * 10
    });
  }
}
