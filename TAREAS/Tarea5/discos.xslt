<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" href="discos.css" />
            </head>
            <body>
                <table>
                    <tr>
                        <th>Nombre del disco</th>
                        <th>Grupo/Artista</th>
                        <th>Año</th>
                        <th>Discografía</th>
                        <th>Formato</th>
                    </tr>
                    <xsl:for-each select="catalog/cd">
                    <xsl:variable name="posicion" select="position()"/>
                        <xsl:choose>
                            <xsl:when test="$posicion mod 2 = 1">
                                <tr class="filaimpar">
                                    <td>
                                        <xsl:value-of select="title" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="artist" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="anio" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="discografy" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="format" />
                                    </td>
                                </tr>
                            </xsl:when>
                            <xsl:otherwise>
                                <tr class="filapar">
                                    <td>
                                        <xsl:value-of select="title" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="artist" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="anio" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="discografy" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="format" />
                                    </td>
                                </tr>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>