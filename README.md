# c-to-assemblyscript-transpiler
Quickly transpile c funtion headers to assemblyscript.

Usage: `node index.js input.txt`
```c
int32_t db_store_i64(account_name scope, table_name table, account_name payer, uint64_t id,  const void* data, uint32_t len);
void db_update_i64(int32_t iterator, account_name payer, const void* data, uint32_t len);
void db_remove_i64(int32_t iterator);
int32_t db_get_i64(int32_t iterator, const void* data, uint32_t len);
int32_t db_next_i64(int32_t iterator, uint64_t* primary);
int32_t db_previous_i64(int32_t iterator, uint64_t* primary);
int32_t db_find_i64(account_name code, account_name scope, table_name table, uint64_t id);
int32_t db_lowerbound_i64(account_name code, account_name scope, table_name table, uint64_t id);
int32_t db_upperbound_i64(account_name code, account_name scope, table_name table, uint64_t id);
int32_t db_end_i64(account_name code, account_name scope, table_name table);
```
Will result in

```typescript
declare function db_store_i64(scope: account_name, table: table_name, payer: account_name, id: u64, data: usize, len: u32): i32;
declare function db_update_i64(iterator: i32, payer: account_name, data: usize, len: u32): void;
declare function db_remove_i64(iterator: i32): void;
declare function db_get_i64(iterator: i32, data: usize, len: u32): i32;
declare function db_next_i64(iterator: i32, primary: usize): i32;
declare function db_previous_i64(iterator: i32, primary: usize): i32;
declare function db_find_i64(code: account_name, scope: account_name, table: table_name, id: u64): i32;
declare function db_lowerbound_i64(code: account_name, scope: account_name, table: table_name, id: u64): i32;
declare function db_upperbound_i64(code: account_name, scope: account_name, table: table_name, id: u64): i32;
declare function db_end_i64(code: account_name, scope: account_name, table: table_name): i32;
```
