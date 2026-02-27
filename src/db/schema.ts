import {sqliteTable, text, integer, real} from "drizzle-orm/sqlite-core";

export const products = sqliteTable('products', {
    id:integer('id').primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    description: text('description'),
    total: integer('total').default(0).notNull(),
    unitType: text('unit_type'),
    costPrice: real('cost_price').default(0).notNull(),
    sellingPrice: real('selling_price').default(0).notNull(),
    createdAt: text('created_at').$defaultFn(() => new Date().toLocaleString('id-ID')),
});