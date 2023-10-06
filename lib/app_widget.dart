import 'package:flutter/material.dart';

import 'shared/themes/app_colors.dart';

class AppWidget extends StatelessWidget {
  const AppWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pay Flow',
      theme: ThemeData(
        primarySwatch: Colors.grey,
        primaryColor: AppColors.primary,
      ),
      initialRoute: "/splash",
      routes: {
        // "/splash": (context) => const SplashPage(),
        // "/home": (context) => const HomePage(),
        // "/login": (context) => const LoginPage(),
        // "/barcode_scanner": (context) => const BarcodeScannerPage()
      },
    );
  }
}
