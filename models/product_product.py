from odoo import models,api


class FavoritProduct(models.Model):
    _inherit = 'product.product'
    
    def GFV(self):
        product = self.search([('product_tag_ids.name', '=','favorite')])
        return product.ids