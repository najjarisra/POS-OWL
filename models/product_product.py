from odoo import models,api


class FavoritProduct(models.Model):
    _inherit = 'product.product'
    
    def GFV(self):
        product = self.search([('pos_categ_id.name', '=','Bureaux')])
        return product.ids