import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:payflow/src/shared/widgets/social_button/social_login_button.dart';

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
    return Scaffold(
      backgroundColor: AppColors.background,
      body: LayoutBuilder(builder: (context, constraints) {
        return SizedBox(
          width: constraints.maxWidth,
          height: constraints.maxHeight,
          child: Stack(
            children: [
              Container(
                height: constraints.maxHeight * 0.4,
                decoration: const BoxDecoration(
                  gradient: RadialGradient(
                    center: Alignment.bottomCenter,
                    focal: Alignment.bottomCenter,
                    radius: 0.65,
                    colors: [
                      AppColors.secundary,
                      AppColors.primary,
                    ],
                  ),
                ),
              ),
              Positioned(
                top: (constraints.maxHeight * 0.10),
                left: 0,
                right: 0,
                child: ShaderMask(
                  shaderCallback: (Rect bounds) {
                    return const LinearGradient(
                      colors: [
                        Color.fromRGBO(255, 255, 255, 0),
                        Color.fromRGBO(255, 255, 255, 0.25),
                        Color.fromRGBO(255, 255, 255, 0.943),
                        Color.fromRGBO(255, 255, 255, 1),
                        Color.fromRGBO(255, 255, 255, 1),
                      ], // Cores do gradiente

                      begin: Alignment
                          .bottomCenter, // Ponto de início do gradiente
                      end: Alignment.center, // Ponto final do gradiente
                    ).createShader(bounds);
                  },
                  // blendMode: BlendMode.srcATop, // Modo de mesclagem (pode ser ajustado conforme necessário)
                  child: Image.asset(
                    AppImages.person,
                    height: constraints.maxHeight * 0.45,
                  ),
                ),
              ),
              Positioned(
                top: constraints.maxHeight * 0.575,
                left: 0,
                right: 0,
                child: Column(
                  children: [
                    // mainAxisAlignment: MainAxisAlignment.center,
                    // crossAxisAlignment: CrossAxisAlignment.center,
                    Image.asset(
                      AppImages.logomini,
                      width: constraints.maxWidth * 0.2,
                    ),
                    Container(
                      width: 250,
                      padding: const EdgeInsets.all(12),
                      child: Text(
                        "Organize seus boletos em um só lugar",
                        textAlign: TextAlign.center,
                        style: TextStyles.titleHome,
                      ),
                    ),
                    const Padding(
                      padding: EdgeInsets.symmetric(vertical: 24.0),
                      child: SocialLoginButton(),
                    ),
                    // const Padding(
                    //   padding: EdgeInsets.only(top: 40, left: 40, right: 40),
                    // child: GoogleLoginButton(
                    //   onTap: () {
                    //     controller.googleSignI(context);
                    //   },
                    // ),
                    // )
                  ],
                ),
              ),
            ],
          ),
        );
      }),
    );
  }
}

    // return Scaffold(
    //   backgroundColor: AppColors.background,
    //   body: LayoutBuilder(builder: (context, constraints) {
    //     return SizedBox(
    //       width: constraints.maxWidth,
    //       height: constraints.maxHeight,
    //       child: Stack(
    //         children: [
    //           Container(
    //             height: constraints.maxHeight * 0.4,
    //             decoration: const BoxDecoration(
    //               gradient: RadialGradient(
    //                 center: Alignment.bottomCenter,
    //                 focal: Alignment.bottomCenter,
    //                 radius: 0.65,
    //                 colors: [
    //                   AppColors.secundary,
    //                   AppColors.primary,
    //                 ],
    //               ),
    //             ),
    //           ),
    //           Positioned(
    //             bottom: constraints.maxHeight * 0.45,
    //             left: 0,
    //             right: 0,
    //             child: ShaderMask(
    //               shaderCallback: (Rect bounds) {
    //                 return const LinearGradient(
    //                   colors: [
    //                     Color.fromRGBO(255, 255, 255, 0),
    //                     Color.fromRGBO(255, 255, 255, 0.25),
    //                     Color.fromRGBO(255, 255, 255, 0.943),
    //                     Color.fromRGBO(255, 255, 255, 1),
    //                     Color.fromRGBO(255, 255, 255, 1),
    //                   ], // Cores do gradiente

    //                   begin: Alignment
    //                       .bottomCenter, // Ponto de início do gradiente
    //                   end: Alignment.center, // Ponto final do gradiente
    //                 ).createShader(bounds);
    //               },
    //               // blendMode: BlendMode.srcATop, // Modo de mesclagem (pode ser ajustado conforme necessário)
    //               child: Image.asset(
    //                 AppImages.person,
    //                 height: constraints.maxHeight * 0.45,
    //               ),
    //             ),
    //           ),
    //           Positioned(
    //             bottom: constraints.maxHeight * 0.1,
    //             left: 0,
    //             right: 0,
    //             child: Column(
    //               // mainAxisAlignment: MainAxisAlignment.center,
    //               // crossAxisAlignment: CrossAxisAlignment.center,
    //               children: [
    //                 Image.asset(
    //                   AppImages.logomini,
    //                   width: constraints.maxWidth * 0.18,
    //                 ),
    //                 Padding(
    //                   // padding: EdgeInsets.only(
    //                   //   horizontal: constraints.maxWidth * 0.2,
    //                   //   vertical: 24,6
    //                   // ),
    //                   padding: EdgeInsets.only(
    //                     left: constraints.maxWidth * 0.2,
    //                     right: constraints.maxWidth * 0.2,
    //                     top: 24,
    //                   ),
    //                   child: Text(
    //                     "Organize seus boletos em um só lugar",
    //                     textAlign: TextAlign.center,
    //                     style: TextStyles.titleHome,
    //                   ),
    //                 ),
    //                 const Padding(
    //                   padding: EdgeInsets.only(
    //                     left: 40,
    //                     right: 40,
    //                     top: 40,
    //                   ),
    //                   child: SocialLoginButton(),
    //                 ),
    //                 // const Padding(
    //                 //   padding: EdgeInsets.only(top: 40, left: 40, right: 40),
    //                 // child: GoogleLoginButton(
    //                 //   onTap: () {
    //                 //     controller.googleSignI(context);
    //                 //   },
    //                 // ),
    //                 // )
    //               ],
    //             ),
    //           )
    //         ],
    //       ),
    //     );
    //   }),
    // );