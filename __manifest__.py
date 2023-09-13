# -*- coding: utf-8 -*-
{
    'name': "list_hiritage_owl",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends' : ['base', 'web', 'point_of_sale'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        # 'views/views.xml',
        # 'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'assets': {
        "point_of_sale.assets": [
            'list_hiritage_owl/static/src/pos/**/*.js',
            'list_hiritage_owl/static/src/pos/*.xml',
            'list_hiritage_owl/static/src/pos/*.scss',


            'list_hiritage_owl/static/src/pos/payment_screen/**/*.xml',
            'list_hiritage_owl/static/src/pos/payment_screen/**/*.js',
            
            'list_hiritage_owl/static/src/favorite_screen_button/**/*.js',
            'list_hiritage_owl/static/src/favorite_screen_button/**/*.xml',
            
            'list_hiritage_owl/static/src/favorite_secreen/**/*.js',
            'list_hiritage_owl/static/src/favorite_secreen/**/*.xml',



        ],
    },

    'demo': [
        'demo/demo.xml',
    ],
}
