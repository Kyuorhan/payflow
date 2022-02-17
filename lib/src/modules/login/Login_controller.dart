// ignore_for_file: file_names, avoid_print

import 'package:flutter/cupertino.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:payflow/shared/Auth/Auth_Controller.dart';
import 'package:payflow/shared/models/user_model.dart';

class LoginController {
  final authController = AuthController();
  Future<void> googleSignI(BuildContext context) async {
    GoogleSignIn _googleSignIn = GoogleSignIn(
      scopes: [
        'email',
      ],
    );
    try {
      final response = await _googleSignIn.signIn();
      final user = UserModel(
        name: response!.displayName!,
        photoURL: response.photoUrl,
      );
      authController.setUser(context, user);
      print(response);
    } catch (error) {
      authController.setUser(context, null);
      print(error);
    }
  }
}
