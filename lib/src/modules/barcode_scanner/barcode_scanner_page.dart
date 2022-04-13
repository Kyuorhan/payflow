import 'package:flutter/material.dart';
import 'package:payflow/shared/themes/app_colors.dart';
import 'package:payflow/shared/themes/app_text_style.dart';
import 'package:payflow/shared/widgets/bottom/sheet_bottom.dart';
import 'package:payflow/shared/widgets/button/set_label_buttons.dart';

class BarcodeScannerPage extends StatefulWidget {
  const BarcodeScannerPage({Key? key}) : super(key: key);

  @override
  _BarcodeScannerPageState createState() => _BarcodeScannerPageState();
}

class _BarcodeScannerPageState extends State<BarcodeScannerPage> {
  @override
  Widget build(BuildContext context) {
    return SheetBottom(
      title: "Não foi possível identificar um código de barras.",
      subtitle: "Tente escanear novamente ou digite o código do seu boleto.",
      primaryLabel: "Escanear novamente",
      primaryOnPressed: () {},
      secondaryLabel: "Digitar código",
      secondaryOnPressed: () {},
    );
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.black,
        title: Text(
          "Escaneie o código de barras do boleto",
          style: TextStyles.buttonBackground,
        ),
        leading: const BackButton(
          color: AppColors.background,
        ),
      ),
      body: Column(
        children: [
          Expanded(
              child: Container(
            color: Colors.black,
          )),
          Expanded(
              flex: 2,
              child: Container(
                color: Colors.transparent,
              )),
          Expanded(
              child: Container(
            color: Colors.black,
          )),
        ],
      ),
      bottomNavigationBar: SetLabelButtons(
        primaryLabel: "Inserir código do boleto",
        primaryOnPressed: () {},
        secondaryLabel: "Adcionar da galeria",
        secondaryOnPressed: () {},
      ),
    );
  }
}
