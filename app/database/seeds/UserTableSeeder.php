<?php

class UserTableSeeder extends Seeder {

    public function run()
    {
  
        // Uncomment the below to wipe the table clean before populating
		DB::table('users')->truncate();

		$users = array(
			'username' => 'superadministrador',
			'password' =>  Hash::make('admin'),
			'email' => 'scadmin@admin.com',
			'nombre' => 'Administrador Sourcode',
			'telefono' => '555.123.0000',
			'celular' => '555.123.0000',
			'created_at' => new DateTime(),
			'updated_at' => new DateTime(),
		);

		// Uncomment the below to run the seeder
		DB::table('users')->insert($users);

		$users = array(
			'username' => 'administrador',
			'password' =>  Hash::make('admin'),
			'email' => 'admin@admin.com',
			'nombre' => 'Administrador',
			'telefono' => '555.123.0000',
			'celular' => '555.123.0000',
			'created_at' => new DateTime(),
			'updated_at' => new DateTime(),
		);

		// Uncomment the below to run the seeder
		DB::table('users')->insert($users);

		$users = array(
			'username' => 'usuario',
			'password' =>  Hash::make('usuario'),
			'email' => 'usuario@usuario.com',
			'nombre' => 'Usuario invitado',
			'telefono' => '555.123.0000',
			'celular' => '555.123.0000',
			'created_at' => new DateTime(),
			'updated_at' => new DateTime(),
		);

		// Uncomment the below to run the seeder
		DB::table('users')->insert($users);

    }

}