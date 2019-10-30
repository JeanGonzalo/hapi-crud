/* const Hapi = require("hapi");
const Mongoose = require("mongoose");
const Joi = require("joi");

const server = new Hapi.Server({
    "host": "localhost",
    "port": 3000
});

server.route({
    method: "POST",
    path: "/person",
    options: {
        validate: {}
    },
    handler: async(request, h) => {

    }
});

server.route({
    method: "GET",
    path: "/people",
    handler: async(request, h) => {

    }
});

server.route({
    metho: "GET",
    path: "/person/{id}",
    handler: async(request, h) => {

    }
});

server.route({
    mathod: "PUT",
    path: "/person/{id}",
    handler: async(request, h) => {

    }
});

server.route({
    method: "DELETE",
    path: "/person/{id}",
    handler: async(request, h) => {

    }
});

server.start(); */



'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
/* const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
}); */

const server = new Hapi.Server({
    "host": "localhost",
    "port": 3000
});

// Add the route
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {

        return reply('Here the books will be shown soon...');
    }
});

server.route({
    method: "POST",
    path: "/person",
    options: {
        validate: {}
    },
    handler: async(request, h) => {

    }
});



// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});