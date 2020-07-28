class CreateRobots < ActiveRecord::Migration[6.0]
  def change
    create_table :robots do |t|
      t.string :name
      t.string :address
      t.integer :modelNumber
      t.boolean :lasers
      t.boolean :japanse

      t.timestamps
    end
  end
end
