# BluetoothSerial-Ionic

Favor de leer lo siguiente.

Es necesario dar de manera manual acceso a Bluetooth. 
Tienes que entrar a información de la aplicación y permitir la opción 'Dispositivos cercanos'.

*ESTO CON ANDROID*
Cuando vayas a exportar la app hacía Android Studio en el archivo llamado 'AndroidManifest.xml' que se encuentra en la siguiente ruta:

android/app/src/main

agregar las siguientes lineas en el apartado de permisos:

<'uses-permission android:name="android.permission.BLUETOOTH_CONNECT>

<'uses-permission android:name="android.permission.BLUETOOTH" />

<'uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />


Quita el '