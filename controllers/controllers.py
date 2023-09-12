# -*- coding: utf-8 -*-
# from odoo import http


# class ListHiritageOwl(http.Controller):
#     @http.route('/list_hiritage_owl/list_hiritage_owl', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/list_hiritage_owl/list_hiritage_owl/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('list_hiritage_owl.listing', {
#             'root': '/list_hiritage_owl/list_hiritage_owl',
#             'objects': http.request.env['list_hiritage_owl.list_hiritage_owl'].search([]),
#         })

#     @http.route('/list_hiritage_owl/list_hiritage_owl/objects/<model("list_hiritage_owl.list_hiritage_owl"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('list_hiritage_owl.object', {
#             'object': obj
#         })
