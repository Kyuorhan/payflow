import 'package:flutter/material.dart';

import '../../shared/themes/app_colors.dart';
import '../../shared/themes/app_images.dart';
import '../../shared/themes/app_texte_style.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SizedBox(
        width: size.width,
        height: size.height,
        child: Stack(
          children: [
            Container(
              width: size.width,
              height: size.height * 0.38,
              decoration: const BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment.bottomCenter,
                  focal: Alignment.bottomCenter,
                  radius: 0.75,
                  colors: [
                    AppColors.secundary,
                    AppColors.primary,
                  ],
                ),
              ),
              // color: AppColors.primary,
            ),
            Positioned(
              top: 100,
              left: 0,
              right: 0,
              child: Image.asset(
                AppImages.person,
                width: size.width,
                height: size.height * 0.4,
              ),
            ),
            Positioned(
              bottom: size.height * 0.2,
              left: 0,
              right: 0,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Image.asset(
                    AppImages.logomini,
                    width: size.width * 0.2,
                    // height: size.height * 0.5,
                  ),
                  Padding(
                    padding: const EdgeInsets.only(
                      top: 35,
                      left: 100,
                      right: 100,
                    ),
                    child: Text(
                      "Organize seus boletos em um só lugar",
                      textAlign: TextAlign.center,
                      style: TextStyles.titleHome,
                    ),
                  ),
                  // Padding(
                  //   padding:
                  //       const EdgeInsets.only(top: 40, left: 40, right: 40),
                  //   child: GoogleLoginButton(
                  //     onTap: () {
                  //       controller.googleSignI(context);
                  //     },
                  //   ),
                  // )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
